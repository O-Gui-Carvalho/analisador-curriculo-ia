interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeColor = '';
  let badgeText = '';

  if (score > 70) {
    badgeColor = 'bg-badge-green text-green-600';
    badgeText = 'Excelente';
  } else if (score > 49) {
    badgeColor = 'bg-badge-yellow text-yellow-600';
    badgeText = 'Bom Começo';
  } else {
    badgeColor = 'bg-badge-red text-red-600';
    badgeText = 'Precisa de Melhorias';
  }

  return (
    <div className={`px-3 py-1 rounded-full ${badgeColor}`}>
      <p className="text-sm font-medium">{badgeText}</p>
    </div>
  );
};

export default ScoreBadge;